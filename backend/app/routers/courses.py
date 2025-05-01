# API routes (courses APIs)
from fastapi import APIRouter
from app.models.course import Course

router = APIRouter()  # This defines the router

# Simulated course data (can be fetched from DB or API)
courses = [
    {"id": 1, "name": "Course 1", "description": "This is course 1", "price": 99.99},
    {"id": 2, "name": "Course 2", "description": "This is course 2", "price": 199.99},
]

@router.get("/courses")
async def get_courses():
    return courses

@router.get("/courses/{course_id}")
async def get_course(course_id: int):
    course = next((c for c in courses if c["id"] == course_id), None)
    if course:
        return course
    return {"error": "Course not found"}
